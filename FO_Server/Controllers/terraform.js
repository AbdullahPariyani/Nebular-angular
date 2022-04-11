const TerraformModel = require("../Models/terraform");
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const {
  PATH,
  DYNAMIC_FILE_JSON,
  FOLDER_PATH,
  AZZURE_TERRAFORM_FOLDER,
} = require("../Configs/constants");
const terraformModel = new TerraformModel();
class TerraformsController {
  generateTerraform = async (req, res) => {
    //new folder generated for user
    let targetFolderName = PATH.terraformUserScriptRepo + Date.now();
    await fs.mkdirSync(targetFolderName);
    await this.copyFolderRecursiveSync(
      PATH.terraformScriptRepo,
      targetFolderName + "/",
      req.body.services
    );
    const zipfile = archiver("zip");
    await zipfile.pipe(res);
    await zipfile
      .directory(targetFolderName + PATH.generateTerraformUser, "/")
      .finalize();
    await fs.rmSync(targetFolderName, { recursive: true, force: true });
  };

  copyFileSync = async (source, target, json) => {
    var targetFile = target;
    if (fs.existsSync(target)) {
      if (fs.lstatSync(target).isDirectory()) {
        targetFile = path.join(target, path.basename(source));
      }
    }
    let result = await this.isContains(FOLDER_PATH, source);
    let data = await fs.readFileSync(source, "utf8");
    if (result) {
      data = await this.replaceData(data, result, json);
    }

    fs.writeFileSync(targetFile, data);
  };

  copyFolderRecursiveSync = async (source, target, json) => {
    try {
      var files = [];
      // Check if folder needs to be created or integrated
      var targetFolder = path.join(target, path.basename(source));
      if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
      }
      // Copy
      if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(async (file) => {
          var curSource = path.join(source, file);
          if (
            AZZURE_TERRAFORM_FOLDER.some(function (v) {
              return curSource.indexOf(v) >= 0;
            })
          ) {
            if (
              Object.keys(json).some(function (v) {
                return curSource.indexOf(v) >= 0;
              })
            ) {
              if (fs.lstatSync(curSource).isDirectory()) {
                await this.copyFolderRecursiveSync(
                  curSource,
                  targetFolder,
                  json
                );
              } else {
                await this.copyFileSync(curSource, targetFolder, json);
              }
            }
          } else {
            if (fs.lstatSync(curSource).isDirectory()) {
              await this.copyFolderRecursiveSync(curSource, targetFolder, json);
            } else {
              await this.copyFileSync(curSource, targetFolder, json);
            }
          }
        });
      }
      return true;
    } catch (e) {
      conosle.log("in heere");
    }
  };

  makeZip = async (targetFolder, outputFile) => {
    const output = await fs.createWriteStream(outputFile);
    var archive = archiver("zip");
    archive.pipe(output);
    archive.directory(targetFolder, false);
    archive.finalize();
  };

  replaceData = async (data, key, inputs) => {
    try {
      let dynamicJSON = DYNAMIC_FILE_JSON[key];
      if (!dynamicJSON) return data;
      let inputJSON = inputs[key];
      if (!inputJSON) return data;
      let newJSON = {};
      Object.keys(dynamicJSON).some((key) => {
        newJSON[dynamicJSON[key]] = inputJSON[key];
      });
      data = data.replace(
        new RegExp(Object.keys(newJSON).join("|"), "gi"),
        (matched) => {
          return newJSON[matched];
        }
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  isContains = async (json, value) => {
    try {
      let contains = false;
      Object.keys(json).some((key) => {
        if (json[key] == value) contains = key;
      });
      return contains;
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = TerraformsController;

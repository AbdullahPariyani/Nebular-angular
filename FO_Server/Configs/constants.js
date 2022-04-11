//GLOBAL STATUS
exports.STATUS_CODES = {
  // 1XX INFORMATIONAL
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLY_HINTS: 103,

  // 2XX SUCCESS
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,

  // 3XX REDIRECTION
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,

  // 4XX CLIENT ERROR
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  UNPROCESSABLE_ENTITY: 422,
  VALIDATION_ERROR: 422,
  NOT_VALID_DATA: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  UNORDERED_COLLECTION: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,

  // 5XX SERVER ERROR
  SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  BANDWIDTH_LIMIT_EXCEEDED: 509,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
};

exports.PATH = {
  terraformUserScriptRepo: "TerraformScript/UserScript/",
  terraformScriptRepo: "TerraformScript/generateTerraform/",
  zipFile: "/script.zip",
  generateTerraformUser: "/generateTerraform",
};

exports.FOLDER_PATH = {
  function_app:
    "TerraformScript/generateTerraform/app/stacks/function_app/tfvars/dev.tfvars",
  cosmos_db:
    "TerraformScript/generateTerraform/app/stacks/cosmos_db/tfvars/dev.tfvars",
  rg: "TerraformScript/generateTerraform/app/stacks/rg/tfvars/dev.tfvars",
  service_plan:
    "TerraformScript/generateTerraform/app/stacks/service_plan/tfvars/dev.tfvars",
  sql: "TerraformScript/generateTerraform/app/stacks/sql/tfvars/dev.tfvars",
  storage_account:
    "TerraformScript/generateTerraform/app/stacks/storage_account/tfvars/dev.tfvars",
  application_insights:
    "TerraformScript/generateTerraform/app/stacks/application_insights/tfvars/dev.tfvars",
};

exports.DYNAMIC_FILE_JSON = {
  function_app: {
    name: "##_NAME_##",
    os_type: "##_OS_TYPE_##",
    stack: "##_STACK_##",
    location: "##_LOCATION_##",
  },
  rg: {
    name: "##_RESOURCE_GROUP_NAME_##",
    location: "##_LOCATION_##",
  },
  storage_account: {
    name: "##_NAME_##",
  },
  service_plan: {
    name: "##_NAME_##",
  },
  sql: {
    name: "##_NAME_##",
    administrator_login: "##_ADMIN_LOGIN_##",
    administrator_login_password: "##_ADMIN_PWD_##",
    location: "##_LOCATION_##",
  },
  cosmos_db: {
    offer_type: "##_OFFER_TYPE_##",
    name: "##_NAME_##",
    location: "_LOCATION_",
  },
  application_insights: {
    application_type: "##_APPLICATION_TYPE_##",
    name: "##_NAME_##",
  },
};

exports.DEFAULT_JSON = {
  storage_account: {
    account_tier: "Standard",
    account_replication_type: "GRS",
  },
};

exports.AZZURE_TERRAFORM_FOLDER = [
  "rg",
  "service_plan",
  "function_app",
  "sql",
  "storage_account",
  "cosmos_db",
  "application_insights",
];

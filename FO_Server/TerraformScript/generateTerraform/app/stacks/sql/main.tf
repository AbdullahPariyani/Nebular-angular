
module "sql" {
  source                    = "../../modules/sql"
  name                      = var.name
  resource_group_name       = var.resource_group_name
  location                  = var.location
  administrator_login = var.administrator_login
  administrator_login_password = var.administrator_login_password
  server_location = var.location
}
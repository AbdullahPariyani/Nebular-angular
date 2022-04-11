resource "azurerm_sql_server" "example" {
  # name                         = 
  name = var.name
  resource_group_name          = var.resource_group_name
  location                     = var.server_location
  version                      = "12.0"
  administrator_login          = var.administrator_login
  administrator_login_password = var.administrator_login_password

 
}
# resource "random_integer" "unique_id" {
#   min = 1000
#   max = 9999
# }

resource "azurerm_sql_database" "example" {
  name                = var.name
  resource_group_name = var.resource_group_name
  location            = var.location
  server_name         = azurerm_sql_server.example.name

  }

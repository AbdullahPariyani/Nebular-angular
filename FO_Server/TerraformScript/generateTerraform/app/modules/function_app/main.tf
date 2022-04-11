resource "random_integer" "unique_id" {
  min = 1000
  max = 9999
}


resource "azurerm_function_app" "example" {
  name                       = "${var.name}${random_integer.unique_id.id}"
  location                   = var.location
  resource_group_name        = var.resource_group_name
  app_service_plan_id        = var.app_service_plan_id
  storage_account_name       = var.sa_name
  storage_account_access_key = var.storage_account_access_key
  os_type                    = var.os_type
  version = "~4"


   app_settings = {
    # FUNCTIONS_WORKER_RUNTIME = "node"
    FUNCTIONS_WORKER_RUNTIME = var.stack

    # WEBSITE_NODE_DEFAULT_VERSION = "3.9"
  }

}





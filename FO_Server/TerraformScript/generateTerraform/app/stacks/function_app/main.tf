
module "function" {
  source                    = "../../modules/function_app"
  resource_group_name = var.resource_group_name
  location = var.location
  storage_account_access_key = var.storage_account_access_key
  sa_name = var.sa_name
  app_service_plan_id = var.app_service_plan_id
  os_type = var.os_type
  name = var.name
  stack = var.stack
  # version = var.version

}
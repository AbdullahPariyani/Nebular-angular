
module "application_insights" {
  source                    = "../../modules/application_insights"
  resource_group_name       = var.resource_group_name
  location                  = var.location
  name = var.name
  application_type = var.application_type
}
resource "azurerm_app_service_plan" "example" {
  name                = var.name
  resource_group_name       = var.resource_group_name
  location                  = var.location
  kind                = var.kind
  sku {
    tier = var.tier
    size = var.size
  }
}
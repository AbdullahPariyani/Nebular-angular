resource "random_integer" "unique_id" {
  min = 1000
  max = 9999
}
resource "azurerm_storage_account" "example" {
  name                      = "${var.name}${random_integer.unique_id.id}"
  resource_group_name       = var.resource_group_name
  location                  = var.sa_location
  account_tier              = var.account_tier
  account_replication_type  = var.account_replication_type
}

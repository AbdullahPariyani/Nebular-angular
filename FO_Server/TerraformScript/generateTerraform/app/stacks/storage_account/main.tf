
module "storage_account" {
  source                    = "../../modules/storage_account"
  name                      = var.name
  resource_group_name       = var.resource_group_name
  sa_location                  = var.sa_location
  account_tier = var.account_tier
  account_replication_type = var.account_replication_type
}
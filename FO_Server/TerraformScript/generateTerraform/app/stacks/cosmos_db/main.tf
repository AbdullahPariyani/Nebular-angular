
module "cosmos_db" {
  source                    = "../../modules/cosmos_db"
  name            = var.name
  resource_group_name       = var.resource_group_name
  cosmosdb_location                  = var.cosmosdb_location
  kind = var.kind
  offer_type = var.offer_type
  
}

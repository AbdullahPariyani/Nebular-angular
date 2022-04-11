resource "random_integer" "ri" {
  min = 10000
  max = 99999
}


resource "azurerm_application_insights" "example" {
  name                = "${var.name}${random_integer.ri.id}"
  location            = var.location
  resource_group_name = var.resource_group_name
  application_type    = var.application_type
}
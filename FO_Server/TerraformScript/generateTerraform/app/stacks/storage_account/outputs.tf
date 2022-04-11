
output "storage_account" {
  value = module.storage_account.storage_account_name
}

output "storage_account_access_key" {
  value = module.storage_account.storage_account_access_key
  sensitive = true
}
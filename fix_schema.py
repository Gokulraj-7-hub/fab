import os

schema_path = "dataconnect/schema/schema.gql"
with open(schema_path, "r", encoding="utf-8") as f:
    content = f.read()

new_content = content.replace('@table(name: "tbl_', '@table(name: "fab_')

with open(schema_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated table names to use fab_ prefix to bypass Cloud SQL migration locks.")

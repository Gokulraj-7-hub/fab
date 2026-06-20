import re

with open("c:/Users/nivas/Pictures/java dev/billing/dataconnect/schema/schema.gql", "r") as f:
    content = f.read()

# Replace @unique(name: "...") with just @unique
content = re.sub(r'@unique\(name:\s*"[^"]*"\)', '@unique', content)

with open("c:/Users/nivas/Pictures/java dev/billing/dataconnect/schema/schema.gql", "w") as f:
    f.write(content)

print("schema.gql updated")

# Migration `20200730151714`

This migration has been generated by santanarscs at 7/30/2020, 3:17:14 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Movie" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"director" TEXT NOT NULL,
"movieName" TEXT NOT NULL,
"yearRelesead" INTEGER NOT NULL)

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200730151714
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,18 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Movie {
+  id           Int    @default(autoincrement()) @id
+  director     String
+  movieName    String
+  yearRelesead Int
+}
```



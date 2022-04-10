CREATE TABLE "public"."instructor" (
    "id" varchar(36) GENERATED ALWAYS AS IDENTITY,
    "specialty" varchar(50),
    "description" varchar(500),
    "first_name" varchar(50),
    "last_name" varchar(50),
    "image_name" varchar(100),
    "image_file" bytea,
    PRIMARY KEY ("id")
);
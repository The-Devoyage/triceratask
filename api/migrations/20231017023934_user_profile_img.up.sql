-- Add profile_img to subgraph_user
ALTER TABLE subgraph_user ADD COLUMN profile_img text DEFAULT null;

-- Insert the default profile_img for all users
UPDATE subgraph_user
SET profile_img = "https://source.boringavatars.com/beam/500/" || identifier || "?square&colors=264653,2a9d8f,e9c46a,f4a261,e76f51";

-- Create trigger that updes profile_image when user is created
CREATE TRIGGER default_profile_img
AFTER INSERT ON subgraph_user
BEGIN
    UPDATE subgraph_user
    SET profile_img = "https://source.boringavatars.com/beam/500/" || identifier || "?square&colors=264653,2a9d8f,e9c46a,f4a261,e76f51"
    WHERE uuid = NEW.uuid;
END;


-- Add profile_img to subgraph_user
ALTER TABLE subgraph_user ADD COLUMN profile_img TEXT DEFAULT NULL;

-- Insert the default profile_img for all users
UPDATE subgraph_user
SET profile_img = 'https://source.boringavatars.com/beam/500/' || identifier || '?square&colors=264653,2a9d8f,e9c46a,f4a261,e76f51';

-- Create trigger that updates profile_img when user is created
CREATE OR REPLACE FUNCTION set_default_profile_img()
RETURNS TRIGGER AS $$
BEGIN
    NEW.profile_img := 'https://source.boringavatars.com/beam/500/' || NEW.identifier || '?square&colors=264653,2a9d8f,e9c46a,f4a261,e76f51';
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER default_profile_img
BEFORE INSERT ON subgraph_user
FOR EACH ROW
EXECUTE FUNCTION set_default_profile_img();


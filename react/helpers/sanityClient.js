import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "ul2c5in9",
  dataset: "production",
  apiVersion: "2023-10-01",
  token: "sk6pHbvmNgA0CrKkvtnj8ecf3KxDFDHzFXKIQkRwpJUy5mWsFoTPY5eIETrVc5G2pgqZ0k9hqMyUgJc4Cc53GYhwI2pmqWkEoWWOyVsMhtPBt9BANvmJM9TmpFHTgK4poVDosPt54w8sbXvbZfZsEPtqMgl2chKNWT4HcWzXrw9MJ023alCB",
  useCdn: false
});

export default client
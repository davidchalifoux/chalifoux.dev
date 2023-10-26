import GhostContentAPI from "@tryghost/content-api";

const ghostUrl = process.env.GHOST_URL;
const ghostKey = process.env.GHOST_KEY;

if (!ghostUrl || !ghostKey) {
  throw new Error("Missing Ghost URL or API key");
}

export const ghostApi = new GhostContentAPI({
  url: ghostUrl,
  key: ghostKey,
  version: "v5.0",
});

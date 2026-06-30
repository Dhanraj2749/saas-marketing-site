import { getStoryblokApi } from "@storyblok/react/rsc";

async function getHomeContent() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
  return data.story;
}

export default async function HomePage() {
  const story = await getHomeContent();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-600">
        {story.content.body[0]?.headline}
      </h1>
    </div>
  );
}
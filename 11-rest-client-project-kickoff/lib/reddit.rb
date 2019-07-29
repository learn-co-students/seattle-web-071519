REDDIT_API = "https://www.reddit.com/r/seattle.json"

class RedditCLI
    def self.run
      response = get_json(REDDIT_API)
      posts = response["data"]["children"]
      titles = posts.map do |post|
        post["data"]["title"]
      end

      titles.each do |title|
        puts title
        puts
      end
    end

    def self.get_json(url)
        puts "getting url: #{url}"
        response = RestClient.get(url)
        json = JSON.parse(response.body)
    end
end
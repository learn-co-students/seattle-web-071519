 require 'rack'
 require 'pry'
 require 'shotgun'

class App
  def call(env_hash)  
    req = Rack::Request.new(env_hash)
    resp = Rack::Response.new
    target_location = req.path.split("/").last
    if req.path == "/"
      resp.write("Welcome to Flatiron School") 
    elsif req.path == "/#{target_location}"
      resp.write("Welcome to the #{target_location} Campus")
    else
      resp.status = 400
      
    end
    resp.finish
  end
end

run App.new
## SWBATs
## Questions :
  - CRUD -> Sinatra
  - Create :
    -
  - Read :
    -
  - Update :
    -
  - Delete :
    -

### High-level development practices
 - [ ] Work within a nested file structure for multiple models
    - Conventional view names (index/show/new/edit)
    - Multiple controllers
 - [ ] Know which questions to ask when given a new user story
    1. What new model(s) do I need?
       - New class?
       - New migration? (i.e. does the schema need to change?)
       - Associations?
       - Seeds?
    2. What route(s) do I need?
    3. What controller action(s) do I need?
       - In Sinatra, this means the code directly below the route, but in Rails it will be a separate file
    4. What view(s) do I need?

## Deliverables for today's lecture
- [ ] **Build out the rest of CRUD**
  1. What new model(s) do I need?
  2. What route(s) do I need?
  3. What controller action(s) do I need?
  4. What view(s) do I need?
### Routes Summary
| CRUD | HTTP Verb  | Route  | Action  |  View | UsedFor |
|---|---|---|---|---|---|
| Create |GET&darr; | '/books/new'  | books#new  |'new.erb'  |  form page to create a new book |
| Create | POST | '/books'  |  books#create | Reroutes to index| Creates a new book in the controller   |
| Read | GET  | '/books'  | books#index  |  index.erb|  displaying information about books  |
| Read |GET  | '/books/:id'  | books#show  |  show |display information about a specific book  |
|  Update | GET&darr; | 'books/:id/edit'  | books#edit| edit.erb  | Renders a form for user to edit  |
|  Update  | PATCH | 'books/:id'  | books#update  | redirects to show | updates the attributes in aspecific book |
| Delete  | "button" |  - |  - |  form with button in the show page | create a form so we can delete records and map it to an action  |
  |  Delete | Delete |  'books/:id' | books#delete |  | deletes/destroys a specific book in the DB|

## Resources
1. Writing a migration to rename column and change column type: http://codkal.com/how-rename-databasecolumn-rails-5-migration/
2. HTML form elements: https://www.w3schools.comhtml/html_form_elements.asp
3. Another reference for select in HTML : https:/www.learnhowtoprogram.com/ruby/ruby-databasebasics/select-form-fields-in-sinatra

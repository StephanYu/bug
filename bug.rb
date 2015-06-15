# 1. Define a function that deletes all elements of the array a = [4,7,8,'x'] that are not numbers between 6 and 9. 
#   Assumptions: 
#     number elements contained in array are integers and whole numbers only

  def remove_element(array)
    array.delete_if do |element|
      element.class != Fixnum || element < 6 || element > 9
    end
  end

# 2. Define a function that prints all permutations of an array. 
  
  def print_permutations_of(array) 
    array.permutation.to_a.each do |element|
      puts element.join(", ")
    end
  end

# 3. Define a function that creates a 5 x 5 array and randomly fills each cell with "Yes", "No" or "Maybe". 
  
  def create_random_array(size=5)
    Array.new(size) { Array.new(size) { ["Yes", "No", "Maybe"].sample } }
  end

# 4. Using the bookingbug API, find the list of services for company where the company_id=114784. Inside the JSON response will be a list of services. Print names of the last two services returned in response. 

# To sign up for the API go to: 
# https://dev.bookingbug.com 

# Once signed in and verified, your app keys and app-id will be on: 
# https://dev.bookingbug.com/admin/access_details 

# The documentation for the Service API call is here: 
# https://dev.bookingbug.com/rest_api 
# under the label; Service List 
# there shouldn't be any need to use the login API as the intention is that you use the public service API


# 5. Write a SQL query to calculate the number of goals for each team. 

players 
id    name    team_id   goals 
1     Joel    1         3 
2     Ed      2         1 
3     Simon   2         4 

teams 
id    name 
1     New Zealand 
2     London 

# Answer:

SELECT Teams.name, SUM(Players.goals) AS goals
FROM teams, players
WHERE teams.id = players.team_id
GROUP BY Teams.name;

# Expected Outcome:

goals
id  team          goals
1   London        5
2   New Zealand   3

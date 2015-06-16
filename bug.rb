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

# Outcome:

goals
id  team          goals
1   London        5
2   New Zealand   3

"To Do: Predict, then Run, and then Investigate "

"To Do: Task 1: Debug and fix the multiplication program below add comments where you fix the bugs to explain what"


print("Welcome to the table quiz.\n")
num = int(input("Enter a number: "))


for i in range(1, 5):

    answer = int(input(f" What is {i} x {num}? "))
    print(f"My answer is {answer} ")
    correct = i * num
   # corrected the indentations
    if answer == correct:
        print("Correct")
    else:
        print(f"No, Correct answer is  {correct}") # changed the 'the' to 'correct'

print("Finished")


""
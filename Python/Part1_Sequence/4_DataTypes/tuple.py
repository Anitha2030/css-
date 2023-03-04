"Further reading on datatypes in python"
# https://docs.python.org/3/library/stdtypes.html#tuple
# https://docs.python.org/3/library/stdtypes.html#set
# https://www.w3docs.com/learn-python/python-data-types.html

"A tuple is an ordered list"
"Predict, then Run, and then Investigate"
tuple1= (21,10,30, "abc", "john")
tuple2= (21,6,7,9,35)

print(f"Original Tuple list: {tuple2}")

addTuple2 = (100,)
tuple2 += addTuple2

print(f"Added to Tuple list: {tuple2}")

maxTuple2 = max(tuple2)
minTuple2 = min(tuple2)
tuple2Sorted = sorted(tuple2)

tuple2Rev= sorted(tuple2, reverse=True)

print(f"max number from tuple {maxTuple2}")
print(f"min number from tuple {minTuple2}")
print(f"Sorted in asceding order: {tuple2Sorted}")

print(f"Sorted in reverse order: {tuple2Rev}")

print(type(tuple1))

#Manipulate tuple based on index position
print(tuple1.index("abc"))

print(tuple1)


"To Do: Investigate and exlain in your own words the purpose of the forLoop in the code block below"
for x in tuple2:
    print(x)

# x is taking index value and executing from 0 to end in tuple2.
for x in tuple1:
    print(x)

# x is taking index value and executing from 0 to end in tuple1.

"Make:"
"Task 1: Follow the example tuples examples abot to create a tuple with five items"
# print the tuple items
# add two more items to your tuple
# sort in ascending and descending order 
# Iterate over your tuple print the tems
tuple3 = (1,2,3,4)
print(type(tuple3))
print(tuple3)
addtuple3 = (5,6)
tuple3 += addtuple3
print(tuple3)
tuple3Sorted = sorted(tuple3)
print(f"Sorted in asceding order: {tuple3Sorted}")
tuple3Rev = sorted(tuple3, reverse = True)
print(f"Sorted in reverse order: {tuple3Rev}")


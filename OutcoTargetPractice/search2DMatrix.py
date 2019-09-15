def search_matrix(matrix, target):

	if not matrix: return False

	num_of_rows = len(matrix)
	print(num_of_rows)
	num_of_cols = len(matrix[0])
	print(num_of_cols)

	front = 0 
	back = (num_of_rows)*(num_of_cols) - 1
	print(back)

	while front <= back:
		midpoint = front + ((back - front) // 2)
		number = matrix[midpoint // num_of_cols][midpoint % num_of_cols]

		if number == target: return True

		elif number < target:
			front = midpoint + 1
		else:
			back = midpoint - 1

	return False

print(search_matrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 0))
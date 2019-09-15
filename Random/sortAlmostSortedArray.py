# Given an array of elements where each element is at most k away from its target position, devise an algorithm that sorts in O(n log k) time. For example, let us consider k is 2, an element at index 7 in the sorted array, can be at indexes 5,6,7,8,9 in the given array. 
# Input: arr[] = {6,5,3,2,8,10,9}, k = 3
# Output: arr[] = {2,3,5,6,8,9,10}

# Solution 1 with Insertion Sort
def insertionSort(A, size): 
	i = 0
	key = 0
	j = 0 

	for i in range(size):
		key = A[i]
		j = i - 1

		while j >= 0 and A[i] > key: 
			A[j + 1] = A[j]
			j = j - 1
		A[j + 1] = key

print(insertionSort([6,5,3,2,8,10,9], 5))
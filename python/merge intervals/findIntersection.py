def findIntersection(intervals,N): 

	# First interval 
	l = intervals[0][0] 
	r = intervals[0][1] 

	# Check rest of the intervals 
	# and find the intersection 
	for i in range(1,N): 

		# If no intersection exists 
		if (intervals[i][0] > r or intervals[i][1] < l): 
			print(-1) 

		# Else update the intersection 
		else: 
			l = max(l, intervals[i][0]) 
			r = min(r, intervals[i][1]) 
		
	

	print("[",l,", ",r,"]") 

# Driver code 

intervals= [ 
			[ 1, 6 ], 
			[ 2, 8 ], 
			[ 3, 10 ], 
			[ 5, 8 ] 
			] 
N =len(intervals) 
findIntersection(intervals, N) 
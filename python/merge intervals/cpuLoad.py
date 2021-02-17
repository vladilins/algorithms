# Python implementation to find the
# maximum CPU Load from the given
# lists of the jobs

from heapq import *

# Blueprint of the job
class job:
	
	# Constructor of the Job
	def __init__(self, start,\
			end, cpu_load):
		self.start = start
		self.end = end
		self.cpu_load = cpu_load
	
	# Operator overloading for the
	# Object that is Job
	def __lt__(self, other):

		# min heap based on job.end
		return self.end < other.end

# Function to find the maximum 
# CPU Load for the given list of jobs
def find_max_cpu_load(jobs):
	
	# Sort the jobs by start time
	jobs.sort(key = lambda x: x.start)
	max_cpu_load, current_cpu_load = 0, 0
	
	# Min-Heap
	min_heap = []
	
	# Loop to iterate over the list
	# of the jobs given for the CPU
	for j in jobs:
		
		# Remove all the jobs from 
		# the min-heap which ended
		while(len(min_heap) > 0 and\
		j.start >= min_heap[0].end):
			current_cpu_load -= min_heap[0].cpu_load
			heappop(min_heap)
	
		# Add the current job
		# into min_heap
		heappush(min_heap, j)
		current_cpu_load += j.cpu_load
		max_cpu_load = max(max_cpu_load, 
					current_cpu_load)
	return max_cpu_load

# Driver Code
if __name__ == "__main__":
	jobs = [job(1, 4, 3), job(2, 5, 4),\
						job(7, 9, 6)]
						
	print("Maximum CPU load at any time: " +\
			str(find_max_cpu_load(jobs)))

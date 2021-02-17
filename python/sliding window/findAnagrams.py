# Output:
# [0, 6]

# Explanation:
# The substring with start index = 0 is "cba", which is an anagram of "abc".
# The substring with start index = 6 is "bac", which is an anagram of "abc".
def findAnagrams(string, anagram):
        
        # sort the anagram and store it back to itself
        anagram = ''.join(sorted(anagram))
        
        # this will represent the current "window"
        window_string = ''
        
        # create a list variable to store the start indices, this is what we will return
        start_indices = []
        
        # initialize the start of the window at index 0
        window_start = 0
        
        # iterate through the entire string
        for char in string:

            # slide the right side of the window (equivalent to adding the next character to current string)
            window_string += char
        
            # start checking the window once the window size is size of anagram
            if len(window_string) == len(anagram):

                # sort the current string in the window and check if it equals the anagram
                if ''.join(sorted(window_string)) == anagram:
                    
                    # FOUND AN ANAGRAM! 
                    # append the window start index to start_indices
                    start_indices.append(window_start)

                # remove the leftmost character of the window and slide the left side of the window
                window_string = window_string[1:]
                window_start += 1

        return start_indices

print (findAnagrams("cbaebabacd", 'abc'))
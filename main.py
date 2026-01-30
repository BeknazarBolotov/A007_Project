


def isMagic(p):
    return (p[0] + p[1] + p[2] == 15 and 
           p[3] + [4] + p[5] == 15 and 
           p[6] + [7] + p[8] == 15 and 
           p[0] + p[3] + p[6] == 15 and  
           p[1] + p[4] + p[7] == 15 and 
           p[2] + p[5] + p[8] == 15 and 
           p[0] + p[4] + p[8] == 15 and 
           p[2] + p[4] + p[6] == 15)

def permute(arr,l):
    if l == len(arr):
        if(isMagic(arr)):
            for i in range(9):
                print(arr[i], end=" ")
                if i % 3 == 2:
                    print()
            exit(0)

nums = [1,2,3,4,5,6,7,8,9]
permute(nums, 0)
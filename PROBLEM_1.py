def two_sum(lst, k):
    for i in range(len(lst)):
        for j in range(len(lst)):
            if i != j and lst[i] + lst[j] == k:
                return True
    return False

lst = [10,15,3,7]
k = 17
print (two_sum(lst,k))

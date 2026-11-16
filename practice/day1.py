# ----- Idea 1: variables (a box with a name) -----
product = "Cap"
price = 300
print(product)
print(price)

# ----- Idea 2: maths with boxes -----
price = 500
quantity = 3
total = price * quantity
print(total)

# ----- Idea 3: mixing words and boxes (f-string) -----
print(f"You bought {quantity} T-shirts. Total: {total}")

# ----- Idea 4: lists (one box holding many things) -----
cart = ["Jeans", "Shirt", "Belt", "Socks"]
print(cart[0])      # first item (counting starts at 0)
print(cart[3])      # last item
print(len(cart))    # how many items

# ----- Idea 5: adding and removing items -----
cart.append("Watch")    # add to the end
cart.remove("Belt")     # take out "Belt"
print(cart)
print(len(cart))

# ----- Idea 6: dictionaries -----
# (your code goes here)

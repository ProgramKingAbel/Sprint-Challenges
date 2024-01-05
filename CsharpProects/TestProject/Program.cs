int[] inventory = { 200, 450, 700, 175, 250 };

int sum = 0;
int bin = 0;

foreach (int value in inventory) {
    sum += value;
    bin++;
    Console.WriteLine($"Bin {bin} = {value} items (Running total: {sum}) ");
}


Console.WriteLine($"We have {sum} number of items in the inventory");

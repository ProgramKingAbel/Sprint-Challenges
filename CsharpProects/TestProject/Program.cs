// Implement stateful/instance methods

Random dice = new Random();
int roll = dice.Next(1, 7);
int roll1 = dice.Next();
int roll2 = dice.Next(50, 101);
Console.WriteLine($"Roll: {roll}");
Console.WriteLine($"Roll1: {roll1}");
Console.WriteLine($"Roll2: {roll2}");

int firstValue = 500;
int secondValue = 600;
int largerValue = Math.Max(firstValue, secondValue);

Console.WriteLine(largerValue);
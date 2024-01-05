Random random = new();
int daysUntilExpiration = random.Next(12);
Console.WriteLine(daysUntilExpiration);
// int discountPercentafge = 0;


if (daysUntilExpiration == 0) {
    Console.WriteLine("Your subscription has expired.");
}

else if (daysUntilExpiration == 1) {
    Console.WriteLine("Your subscription expires within a day! \n Renew now and save 20%!");
}

if (daysUntilExpiration > 1 && daysUntilExpiration <= 5) {
    Console.WriteLine($"Your subscription expires in {daysUntilExpiration} days. \n Renew now and save 10%!");
}

else if (daysUntilExpiration > 5 && daysUntilExpiration <= 10) {
    Console.WriteLine("Your subscription will expire soon. Renew now!");
}

else {
    Console.WriteLine(" ");
}
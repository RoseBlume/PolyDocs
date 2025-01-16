---
title: 'Files'
sidebar:
  order: 5
---

 



In C#, working with files is a common task. Whether you need to read from a file, write to a file, or perform other file operations, C# provides a rich set of classes and methods to handle file operations efficiently.





To read from a file in C#, you can use the `StreamReader` class. Here's an example:



```csharp

using System;

using System.IO;



class Program

{

    static void Main()

    {

        string filePath = "path/to/your/file.txt";



        using (StreamReader sr = new StreamReader(filePath))

        {

            string line;

            while ((line = sr.ReadLine()) != null)

            {

                Console.WriteLine(line);

            }

        }

    }

}

```





To write to a file in C#, you can use the `StreamWriter` class. Here's an example:



```csharp

using System;

using System.IO;



class Program

{

    static void Main()

    {

        string filePath = "path/to/your/file.txt";



        using (StreamWriter sw = new StreamWriter(filePath))

        {

            sw.WriteLine("Hello, world!");

        }

    }

}

```



These are just a few examples of how you can work with files in C#. There are many more classes and methods available to handle various file operations. Make sure to explore the .NET documentation for more information.



Remember to handle exceptions and dispose of resources properly when working with files in C#.

---
title: 'Files'
sidebar:
  order: 5
---

 



In Java, the `java.io.File` class is used to represent files and directories. It provides methods for creating, deleting, and manipulating files.





To create a new file, you can use the `createNewFile()` method. Here's an example:



```java

import java.io.File;

import java.io.IOException;



public class CreateFileExample {

    public static void main(String[] args) {

        try {

            File file = new File("path/to/file.txt");

            if (file.createNewFile()) {

                System.out.println("File created successfully!");

            } else {

                System.out.println("File already exists.");

            }

        } catch (IOException e) {

            System.out.println("An error occurred.");

            e.printStackTrace();

        }

    }

}

```





To delete a file, you can use the `delete()` method. Here's an example:



```java

import java.io.File;



public class DeleteFileExample {

    public static void main(String[] args) {

        File file = new File("path/to/file.txt");

        if (file.delete()) {

            System.out.println("File deleted successfully!");

        } else {

            System.out.println("Failed to delete the file.");

        }

    }

}

```



These are just a few examples of how to work with files in Java. You can explore more methods and functionalities provided by the `java.io.File` class in the Java documentation.



Remember to handle exceptions properly when working with files to ensure your code is robust and error-free.

---
title: 'Files'
sidebar:
  order: 19
---

 In C++, file handling is an essential part of programming. It allows you to store data permanently and retrieve it when needed. This chapter will guide you through the basics of file handling in C++.





To open a file in C++, you need to include the `<fstream>` header. This header provides three classes: `ifstream`, `ofstream`, and `fstream`. These classes are used to read from files, write to files, and both read from and write to files, respectively.



```cpp



int main() {

    std::ofstream outFile("example.txt");

    if (outFile.is_open()) {

        outFile << "Hello, file!";

        outFile.close();

    } else {

        std::cerr << "Unable to open file";

    }

    return 0;

}

```



In the example above, we open a file named `example.txt` for writing using the `ofstream` class. We then check if the file is open and write "Hello, file!" to it. Finally, we close the file.





Reading from a file is similar to writing to a file. You use the `ifstream` class to open the file and then read its contents.



```cpp



int main() {

    std::ifstream inFile("example.txt");

    if (inFile.is_open()) {

        std::string line;

        while (std::getline(inFile, line)) {

            std::cout << line << std::endl;

        }

        inFile.close();

    } else {

        std::cerr << "Unable to open file";

    }

    return 0;

}

```



In this example, we open `example.txt` for reading using the `ifstream` class. We then read the file line by line and print each line to the console.





When opening a file, you can specify different modes to control how the file is accessed. Some common modes include:



- `ios::in`: Open for reading.

- `ios::out`: Open for writing.

- `ios::app`: Append to the end of the file.

- `ios::binary`: Open in binary mode.



You can combine these modes using the bitwise OR operator (`|`).



```cpp



int main() {

    std::ofstream outFile("example.txt", std::ios::app);

    if (outFile.is_open()) {

        outFile << "\nAppending this line.";

        outFile.close();

    } else {

        std::cerr << "Unable to open file";

    }

    return 0;

}

```



In this example, we open `example.txt` in append mode using `std::ios::app`. This allows us to add new content to the end of the file without overwriting the existing content.





It is important to close a file after you are done using it. This ensures that all data is properly written to the file and resources are released. You can close a file using the `close()` member function.



```cpp



int main() {

    std::ofstream outFile("example.txt");

    if (outFile.is_open()) {

        outFile << "Writing to file.";

        outFile.close();

    } else {

        std::cerr << "Unable to open file";

    }

    return 0;

}

```



In this example, we open `example.txt` for writing, write some content to it, and then close the file using the `close()` function.



By understanding these basics of file handling in C++, you can start working with files to store and retrieve data in your programs. Practice these concepts to become proficient in managing files in C++.
---
title: 'Math Functions'
sidebar:
  order: 22
---

 In this section, we will explore various math functions available in the C programming language. These functions are part of the standard library and can be used to perform common mathematical operations.





To use the math functions in C, you need to include the math library by adding the following line at the beginning of your program:



```c

```





Here are some of the most commonly used math functions in C:





The `sqrt` function calculates the square root of a number.



```c



int main() {

    double num = 16.0;

    double result = sqrt(num);

    printf("The square root of %.2f is %.2f\n", num, result);

    return 0;

}

```





The `pow` function raises a number to the power of another number.



```c



int main() {

    double base = 2.0;

    double exponent = 3.0;

    double result = pow(base, exponent);

    printf("%.2f raised to the power of %.2f is %.2f\n", base, exponent, result);

    return 0;

}

```





These functions calculate the sine, cosine, and tangent of an angle (in radians), respectively.



```c



int main() {

    double angle = M_PI / 4; // 45 degrees in radians

    printf("sin(%.2f) = %.2f\n", angle, sin(angle));

    printf("cos(%.2f) = %.2f\n", angle, cos(angle));

    printf("tan(%.2f) = %.2f\n", angle, tan(angle));

    return 0;

}

```





The `log` function calculates the natural logarithm (base e) of a number, while `log10` calculates the base-10 logarithm.



```c



int main() {

    double num = 10.0;

    printf("Natural logarithm of %.2f is %.2f\n", num, log(num));

    printf("Base-10 logarithm of %.2f is %.2f\n", num, log10(num));

    return 0;

}

```





The `fabs` function returns the absolute value of a floating-point number.



```c



int main() {

    double num = -23.45;

    printf("The absolute value of %.2f is %.2f\n", num, fabs(num));

    return 0;

}

```



These are just a few examples of the math functions available in C. By including the `<math.h>` library, you can access a wide range of mathematical operations to enhance your programs.
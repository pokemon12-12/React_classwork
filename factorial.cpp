#include <iostream>
using namespace std;

int main() {
    int array[5];
    for (int idx = 0; idx < 5; idx++) {
        cin >> array[idx];
        cout << "Read: " << array[idx] << endl; // Debug line
    }

    int size = sizeof(array) / sizeof array[0];
    cout << "Array size: " << size << endl;

    cout << "Array elements:" << endl;
    for (int idx = 0; idx < size; idx++) {
        cout << array[idx] << endl;
    }

    return 0;
}


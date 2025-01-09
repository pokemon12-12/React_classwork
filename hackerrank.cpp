#include<iostream>
using namespace std;
int main (){
int i,num,fact=1;  
cout<<"enter a number";
cin>>num;
if(num<0)
{
cout<<"Enter the positive number ";
}
else{
    for(i=1;i<=num;i++){
        fact=fact*i;
    }
          
    
    

cout<<fact;
}    
}


        
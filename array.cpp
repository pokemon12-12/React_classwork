#include<iostream> 
using namespace std;
int main (){
    int n,m,i,j;
    cout<<"Enter the number of rows ";
    cin>>n;
    cout<<"Enter the number pf columns ";
    cin>>m;
    
    for(i=1;i<=n;i++){
        for(j=1;j<=m;j++){
            if(int i==1 || i==n||j=1||j==m){
                cout<<"*";
                else{
                    cout<<" ";
                }
                
                    
                }
            }
            
        }
        cout<<endl;
    }

  

   
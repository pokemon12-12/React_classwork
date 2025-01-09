#include<iostream>
using namespace std;
int main(){
    int arr[]={2,4,6,8,10,12,14,16,18,20};
    int search=12;
    int ans=-1;
    for(int i=0;i<10;i++){
        if(arr[i]==search){
            ans=i;
             break;
        }
        
    }
    cout<<ans;
    return 0;
}

    

  

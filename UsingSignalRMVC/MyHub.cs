using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace UsingSignalRMVC
{
    public class MyHub : Hub
    {
        public void MethodCall(string message)
        {
            Clients.All.MethodCall(message);
            //Clients.All.hello();
        }
        //public void CallClientMethod(string MethodName, string data)
        //{
        //    var ctx = GlobalHost.ConnectionManager.GetHubContext<MyHub>();
        //    IClientProxy proxy = ctx.Clients.All;
        //    proxy.Invoke(MethodName, data);
        //}
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YoYoWebApp.Models;

namespace YoYoWebApp.ViewModel
{
    public class HomeViewModel
    {
        public IEnumerable<Player> players { get; set; }
    }
}

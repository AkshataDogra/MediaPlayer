using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MediaPlayerController : ControllerBase
    {
        private readonly TodoContext _context;

        public MediaPlayerController(TodoContext context)
        {
            _context = context;

            if (_context.MediaPlayerItems.Count() == 0)
            {
                // Create a new MediaPlayerItem if collection is empty,
                // which means you can't delete all MediaPlayerItems.
                _context.MediaPlayerItems.Add(new MediaPlayerItem {
                    Id = 101,  
                    SongName = "Ik Onkaar",  
                    Sequence = 1
                });

                 _context.MediaPlayerItems.Add(new MediaPlayerItem {
                    Id = 102,  
                    SongName = "Rewrite the Stars",  
                    Sequence = 2
                });

                 _context.MediaPlayerItems.Add(new MediaPlayerItem {
                    Id = 103,  
                    SongName = "Titanium",  
                    Sequence = 3
                });

                 _context.MediaPlayerItems.Add(new MediaPlayerItem {
                    Id = 104,  
                    SongName = "Lost",  
                    Sequence = 4
                });

                 _context.MediaPlayerItems.Add(new MediaPlayerItem {
                    Id = 105,  
                    SongName = "High Hopes",  
                    Sequence = 5
                });

                _context.MediaPlayerItems.Add(new MediaPlayerItem {
                    Id = 106,  
                    SongName = "Free Fall",  
                    Sequence = 6
                });

                _context.MediaPlayerItems.Add(new MediaPlayerItem {
                    Id = 107,  
                    SongName = "Stay With Me",  
                    Sequence = 7
                });

                _context.SaveChanges();
            }
        }


        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MediaPlayerItem>>> GetMediaPlayerItems()
        {
            return await _context.MediaPlayerItems.ToListAsync();
        }

        // GET: api/Todo/id
        [HttpGet("{id}")]
        public async Task<ActionResult<MediaPlayerItem>> GetMediaPlayerItem(long id)
        {
            var MediaPlayerItem = await _context.MediaPlayerItems.FindAsync(id);

            if (MediaPlayerItem == null)
            {
                return NotFound();
            }

            return MediaPlayerItem;
        }

        // POST: api/Todo
        [HttpPost]
        public async Task<ActionResult<String>> PostMediaPlayerItem(SongSequenceRequest request)
        {
            if (request == null)
            {
                return BadRequest();
            }
            var items = _context.MediaPlayerItems;
            _context.MediaPlayerItems.RemoveRange(_context.MediaPlayerItems);
            _context.SaveChanges();
            for(int j=0;j<request.SongList.Count;j++){
                request.SongList[j].Sequence = j+1;
                _context.MediaPlayerItems.Add(request.SongList[j]);
            }
            _context.SaveChanges();
            // for(int i=0;i<request.SongList.Count;i++){
            //     _context.MediaPlayerItems.ElementAt(i).Sequence = request.SongList[i];
            // }
             //_context.MediaPlayerItems.Add(item);
             await _context.SaveChangesAsync();

            return "Succusfully Updated Sequence!!!";
        }

        // PUT: api/Todo/id
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMediaPlayerItem(long id, MediaPlayerItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/shuffle
        // [HttpPost]
        // public async Task<ActionResult<String>> ShuffleMediaPlayerItem(SongSequenceRequest request)
        // {
        //     if (request == null)
        //     {
        //         return BadRequest();
        //     }
        //     Console.WriteLine("Inside");
        //     for(int i=0;i<request.SongList.Count;i++){
        //         _context.MediaPlayerItems.Find(i).Sequence = request.SongList[i];
        //     }
            
        //     // _context.Entry(item).State = EntityState.Modified;
        //     // await _context.SaveChangesAsync();

        //     return "Hello";
        // }

        // DELETE: api/Todo/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMediaPlayerItem(long id)
        {
            var MediaPlayerItem = await _context.MediaPlayerItems.FindAsync(id);

            if (MediaPlayerItem == null)
            {
                return NotFound();
            }

            _context.MediaPlayerItems.Remove(MediaPlayerItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
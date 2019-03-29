using System.Collections.Generic;
namespace TodoApi.Models
{
    public class MediaPlayerItem
    {
        public long Id { get; set; }
        public string SongName { get; set; }
        public int Sequence { get; set; }
    }

    public class SongSequenceRequest
    {
        public IList<MediaPlayerItem> SongList { get; set; }
        
    }
}
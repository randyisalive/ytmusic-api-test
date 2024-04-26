from ytmusicapi import YTMusic
import pprint

yt = YTMusic("oauth.json")  # Replace with your authentication details
search_results = yt.search("Oasis Wonderwall")
pprint.pprint(search_results)

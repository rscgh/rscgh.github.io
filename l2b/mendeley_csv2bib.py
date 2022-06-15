


import mendeley



mendeley = mendeley.Mendeley(9513, "xFE0kqs5Z21k5vqd")
session = mendeley.start_client_credentials_flow().authenticate()



squery="Top-down coordination of local cortical\nstate during selective attention"
page = session.catalog.search(squery).list()

# page.count => number of all matchign things
# page.next_page.items
# page.items[0].authors[0].last_name

for item in page.items: print(item.authors[0].last_name, "(", item.year ,")",item.title)

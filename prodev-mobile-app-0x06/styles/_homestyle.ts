import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchGroup: {
    padding: 30,
    paddingTop: 100,
    backgroundColor: '#34967C',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 28,
    padding: 3,
    shadowColor: "#000",
    shadowOffset: { width: 100, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  searchControlGroup: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchFormText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    padding: 3,
  },
  searchControl: {
    paddingVertical: 2,
    fontSize: 12,
    fontWeight: 'normal',
    color: '#777',
  },
  searchButton: {
    backgroundColor: '#f6a22f',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    columnGap: 20,
  },
  filterContainer: {
    alignItems: 'center',
    rowGap: 5,
    paddingHorizontal: 5,
    width: 60,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  paginationContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#eee',
  },
  showMoreButtonText: {
    fontWeight: 'bold',
    color: '#333',
  }
});

export { styles };